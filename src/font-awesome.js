/**
 * 將font awesome 圖示註冊到全域組件
 */

import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faCheckCircle,
  faTimesCircle,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faTimes,
  faCheckCircle,
  faTimesCircle,
  faExclamationTriangle,
  faInfoCircle
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
