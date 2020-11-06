export class LinksTransformer {
  constructor(links) {
    this.links = links;
  }

  generateAnchorTag(link) {
    return `<a href=${link.url}>${link.name}</a>`;
  }

  element(element) {
    const addedLinks = this.links
      .map((link) => this.generateAnchorTag(link))
      .join("");
    element.setInnerContent(addedLinks, {html: true});
  }
}

export class NameTransformer {
  element(element) {
    element.setInnerContent("markrepedersen");
  }
}

export class ProfileTransformer {
  element(element) {
    element.setAttribute("style", "");
  }
}

export class AvatarTransformer {
  element(element) {
    element.setAttribute(
      "src",
      "https://banner2.cleanpng.com/20180730/yr/kisspng-stick-figure-clip-art-abacus-clipart-black-and-white-5b5ec2307bf250.1327257915329367525077.jpg"
    );
  }
}

export class SocialMediaTransformer {
  constructor(links) {
    this.links = links;
  }

  generateAnchorTag(link) {
    return `<a href=${link.url}>${link.name}<img src=${link.svg}></a>`;
  }

  element(element) {
    element.setAttribute("style", "");
    const newContent = this.links
      .map((link) => this.generateAnchorTag(link))
      .join("");
    element.setInnerContent(newContent, {html: true});
  }
}

export class TitleTransformer {
  element(element) {
    element.setInnerContent("Mark Pedersen");
  }
}

export class BackgroundTransformer {
  element(element) {
    element.setAttribute("style", "background-color:orange");
  }
}
