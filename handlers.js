import {links, socialMediaLinks} from "./links";
import {
  LinksTransformer,
  ProfileTransformer,
  AvatarTransformer,
  NameTransformer,
  SocialMediaTransformer,
  TitleTransformer,
  BackgroundTransformer,
} from "./transformers";

export function linkHandler() {
  let json = JSON.stringify(links);

  return new Response(json, {
    headers: {"content-type": "application/json"},
  });
}

export async function staticPageHandler() {
  let randStaticPage = await fetch(
    "https://static-links-page.signalnerve.workers.dev"
  );

  return new HTMLRewriter()
    .on("div#links", new LinksTransformer(links))
    .on("div#profile", new ProfileTransformer())
    .on("img#avatar", new AvatarTransformer())
    .on("h1#name", new NameTransformer())
    .on("div#social", new SocialMediaTransformer(socialMediaLinks))
    .on("title", new TitleTransformer())
    .on("body", new BackgroundTransformer())
    .transform(randStaticPage);
}
