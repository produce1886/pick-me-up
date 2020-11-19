import PreviewService from "@src/lib/api/Preview";
import { Preview } from "@src/types/Data";
import useAxiosQuery from "./Api";

export const usePreviewGetApi = useAxiosQuery<Preview[]>(
  PreviewService.getPreview
);

const PreviewHooks = { usePreviewGetApi };

export default PreviewHooks;
