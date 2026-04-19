// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"introduction/authentication.mdx": () => import("../content/docs/introduction/authentication.mdx?collection=docs"), "introduction/overview.mdx": () => import("../content/docs/introduction/overview.mdx?collection=docs"), "api-reference/create-custom-link.mdx": () => import("../content/docs/api-reference/create-custom-link.mdx?collection=docs"), "api-reference/create-link.mdx": () => import("../content/docs/api-reference/create-link.mdx?collection=docs"), "api-reference/get-link.mdx": () => import("../content/docs/api-reference/get-link.mdx?collection=docs"), "api-reference/overview.mdx": () => import("../content/docs/api-reference/overview.mdx?collection=docs"), }),
};
export default browserCollections;