import type { CollectionEntry } from "astro:content";

import FamilySvg from "../components/FamilySvg.astro";
import FlagSvg from "../components/FlagSvg.astro";
import HandShakeSvg from "../components/HandShakeSvg.astro";
import HouseSvg from "../components/HouseSvg.astro";
import IdSvg from "../components/IdSvg.astro";
import RefreshSvg from "../components/RefreshSvg.astro";
import SchoolSvg from "../components/SchoolSvg.astro";
import UsersPlusSvg from "../components/UsersPlusSvg.astro";
import WorkSvg from "../components/WorkSvg.astro";
import WorldSvg from "../components/WorldSvg.astro";

export type ServiceIcon = CollectionEntry<"services">["data"]["icon"];

export const SERVICE_ICONS = {
  world: WorldSvg,
  school: SchoolSvg,
  family: FamilySvg,
  flag: FlagSvg,
  work: WorkSvg,
  house: HouseSvg,
  "hand-shake": HandShakeSvg,
  "users-plus": UsersPlusSvg,
  id: IdSvg,
  refresh: RefreshSvg,
} satisfies Record<ServiceIcon, unknown>;

export type ServiceIconComponent = (typeof SERVICE_ICONS)[ServiceIcon];
