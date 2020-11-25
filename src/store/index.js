// Modules
import segmentation from './modules/segmentationModule';
import cursor from './modules/cursorModule.js';
import globalConfiguration from './modules/globalConfigurationModule.js';
import external from '../externalModules.js';
import { getLogger } from '../util/logger.js';

const logger = getLogger('store:modules:storeLogger');

export const state = {
  // Global
  globalTools: {},
  globalToolChangeHistory: [],
  // Tracking
  enabledElements: [],
  tools: [],
  isToolLocked: false,
  activeMultiPartTool: null,
  mousePositionImage: {},
  // Settings
  clickProximity: 6,
  touchProximity: 10,
  handleRadius: 6,
  deleteIfHandleOutsideImage: true,
  preventHandleOutsideImage: false,
  // Cursor
  svgCursorUrl: null,
};

export const getters = {
  mouseTools: () =>
    state.tools.filter(tool =>
      tool.supportedInteractionTypes.includes('Mouse')
    ),
  touchTools: () =>
    state.tools.filter(tool =>
      tool.supportedInteractionTypes.includes('Touch')
    ),
  keyboardTools: () =>
    state.tools.filter(tool =>
      tool.supportedInteractionTypes.includes('Keyboard')
    ),
  enabledElementByUID: enabledElementUID =>
    state.enabledElements.find(
      element =>
        external.cornerstone.getEnabledElement(element).uuid ===
        enabledElementUID
    ),
};

export const setters = {};

export const modules = {
  segmentation,
  cursor,
  globalConfiguration,
};

export function getModule(moduleName) {
  return modules[moduleName];
}

export default {
  modules,
  state,
  getters,
};
