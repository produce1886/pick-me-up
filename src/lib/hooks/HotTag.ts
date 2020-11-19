import HotTagService from "@src/lib/api/HotTag";
import { HotTag } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const useHotTagGetApi = useAxiosQuery<HotTag[]>(HotTagService.getHotTag);

const HotTagHooks = { useHotTagGetApi };

export default HotTagHooks;
