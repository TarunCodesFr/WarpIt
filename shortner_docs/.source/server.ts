// @ts-nocheck
import * as __fd_glob_8 from "../content/docs/api-reference/overview.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/api-reference/get-link.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/api-reference/create-link.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/api-reference/create-custom-link.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/introduction/overview.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/introduction/authentication.mdx?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/introduction/_meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/api-reference/_meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/_meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"_meta.json": __fd_glob_0, "api-reference/_meta.json": __fd_glob_1, "introduction/_meta.json": __fd_glob_2, }, {"introduction/authentication.mdx": __fd_glob_3, "introduction/overview.mdx": __fd_glob_4, "api-reference/create-custom-link.mdx": __fd_glob_5, "api-reference/create-link.mdx": __fd_glob_6, "api-reference/get-link.mdx": __fd_glob_7, "api-reference/overview.mdx": __fd_glob_8, });