<template>
  <div>
    <div class="card-header">
      <span>{{ title }}</span>
      <svg t="1698739935918" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="4117" width="16" height="16">
        <path
          d="M512 85.333C276.48 85.333 85.333 276.48 85.333 512S276.48 938.667 512 938.667 938.667 747.52 938.667 512 747.52 85.333 512 85.333z m0 796.445c-203.662 0-369.778-166.116-369.778-369.778S308.338 142.222 512 142.222 881.778 308.338 881.778 512 715.662 881.778 512 881.778z"
          p-id="4118" fill="#707070"></path>
        <path
          d="M549.547 641.707l-29.583 15.929c2.276-12.516 14.792-62.578 35.272-152.463 2.275-9.102 4.55-36.409-15.93-47.786-6.826-3.414-14.79-3.414-22.755 0-9.102 3.413-17.067 7.964-23.893 12.515-4.551 3.414-25.031 18.205-60.302 44.374-6.827 5.688-9.103 14.79-4.552 22.755s13.654 10.24 20.48 5.689l34.134-20.48-35.271 150.187c-3.414 13.653 1.137 22.755 7.964 30.72 5.689 6.826 14.791 11.377 23.893 11.377 4.552 0 7.965-1.137 11.378-2.275 6.827-3.413 31.858-17.067 76.231-43.236 7.965-4.55 11.378-14.79 5.69-22.755-3.414-5.69-13.654-9.102-22.756-4.551zM477.867 364.089a45.511 45.511 0 1 0 91.022 0 45.511 45.511 0 1 0-91.022 0z"
          p-id="4119" fill="#707070"></path>
      </svg>
    </div>
    <div class="card-content">{{ count }}</div>
    <div class="card-charts">
      <slot name="charts"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['title', 'count']
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  color: #d9d9d9;
  font-size: 16px;
}

.card-content {
  font-size: 30px;
  padding: 10px 0px;
}

.card-charts {
  height: 50px;
  font-size: 12px;
  padding-top: 8px;
}

.card-footer {
  height: 20px;
  border-top: 1px solid #eee;
  padding-top: 10px;
  font-size: 14px;
}
</style>