import {linkHandler, staticPageHandler} from "./handlers";

/**
 * Adds protocols to given path.
 */
function protocols(path) {
  return ["https://" + path, "http://" + path];
}

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  let url = request.url;
  return await (url.endsWith("/links") ? linkHandler() : staticPageHandler());
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
