import { ReactComponent as HeartImg } from "./logo.svg";
import { React, useState } from "react";

function Icons() {
  return (
    <div>
      <HeartImg width="30" height="30" fill="#FF6666" />
      <div data-v-4aaf6e5a="" class="area_util">
        <strong data-v-4aaf6e5a="" class="screen_out">
          유틸 기능
        </strong>{" "}
        <button
          data-v-4aaf6e5a=""
          type="button"
          data-tiara-action-name="click_search_open"
          class="btn_search"
        >
          {/* <span data-v-4aaf6e5a="" class="screen_out">
            검색창 열기
          </span>{" "} */}
        </button>{" "}
        <button
          data-v-4aaf6e5a=""
          type="button"
          data-tiara-action-name="click_language_en"
          class="btn_language"
        >
          <span data-v-4aaf6e5a="">
            {/* <span data-v-4aaf6e5a="" class="screen_out">
              영어로 보기
            </span>{" "} */}
          </span>
        </button>{" "}
        <button
          data-v-4aaf6e5a=""
          type="button"
          data-tiara-action-name="click_darkmode"
          class="btn_mode"
        >
          <span data-v-4aaf6e5a="">
            {/* <span data-v-4aaf6e5a="" class="screen_out">
              다크모드로 변경하기
            </span>{" "} */}
          </span>
        </button>
      </div>
    </div>
  );
}
export default Icons;
