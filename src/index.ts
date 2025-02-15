import type { App } from "vue";
import Vue3NextTable from "./components/TableView.vue";

export default {
  install: (app: App) => {
    app.component("Vue3NextTable", Vue3NextTable);
  },
};

// ✅ 컴포넌트 개별 export 가능하도록 설정
export { Vue3NextTable };
