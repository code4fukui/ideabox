class IdeaBox {
  constructor(name) {
    this.endpoint = "https://" + name + "-api.ideabox.cloud";
    this.name = name;
  }
  async apiGet(path) {
    const url = this.endpoint + path;
    return await (await fetch(url)).json();
  }
  async fetchAndSave(type) {
    if (type == undefined) {
      await this.fetchAndSave("ideas");
      await this.fetchAndSave("comments");
      return;
    }
    const url = "/v1/" + type + "?limit=1000";
    const data = await this.apiGet(url);
    await Deno.mkdir(this.getPath(), { recursive: true });
    await Deno.writeTextFile(this.getPath(type), JSON.stringify(data, null, 2));
  }
  getPath(type) {
    if (!type) {
      return "../data/" + this.name + "/";
    }
    return "../data/" + this.name + "/" + type + ".json";
  }
  async getIdeas() {
    const data = JSON.parse(await Deno.readTextFile(this.getPath("ideas")));
    return data.results.map(i => {
      return {
        id: i.id, // https://chibacity.ideabox.cloud/detail/2b473177-f2af-401a-87e9-e2985dfcf050
        title: i.name,
        body: i.contents,
        created: i.date_entered,
        modified: i.date_modified,
      };
    }).sort((a, b) => a.created.localeCompare(b.created));
  }
  async getComments() {
    const data = JSON.parse(await Deno.readTextFile(this.getPath("comments")));
    return data.results.map(i => {
      return {
        id: i.id, // https://chibacity.ideabox.cloud/detail/2cca4fd5-71ef-46d0-bc0b-27dc91f3f53f
        idea_id: i.parent_id,
        body: i.contents,
        created: i.date_entered,
        modified: i.date_modified,
      };
    }).sort((a, b) => a.created.localeCompare(b.created));
  }
  async getIdeasWithComments() {
    const ideas = await this.getIdeas();
    const coms = await this.getComments();
    for (const idea of ideas) {
      idea.comments = coms.filter(c => c.idea_id == idea.id).map(c => {
        delete c.idea_id;
        return c;
      });
      idea.url = "https://" + this.name + ".ideabox.cloud/idea/" + idea.id;
    }
    // test
    /*
    console.log("coms")
    for (const c of coms) {
      if (c.idea_id) {
        console.log(c);
      }
    }
    console.log("coms")
    */
    return ideas;
  }
}

export { IdeaBox };
