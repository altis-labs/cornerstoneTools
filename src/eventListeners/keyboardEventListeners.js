import EVENTS from '../events.js';
import external from '../externalModules.js';
import copyPoints from '../util/copyPoints.js';
import triggerEvent from '../util/triggerEvent.js';
import { getLogger } from '../util/logger.js';

function keyDown(e) {
  console.log(e);
  const element = e.target;

  const enabledElement = external.cornerstone.getEnabledElement(element);

  const eventType = EVENTS.KEY_DOWN;

  const eventData = {
    event: e,
    viewport: external.cornerstone.getViewport(element),
    image: enabledElement.image,
    element,
    key: e.key,
    keyCode: e.code,
    ctrlKey: e.ctrlKey,
    type: eventType,
  };

  triggerEvent(element, eventType, eventData);
}

function disable(element) {
  element.removeEventListener('keydown', keyDown);
}

function enable(element) {
  // Prevent handlers from being attached multiple times
  disable(element);

  element.addEventListener('keydown', keyDown);
}

export default {
  enable,
  disable,
};
