<template>
  <div class="modal-backdrop">
    <div class="modal-xc">
      <header class="modal-header">
        <slot name="header">
          This is the default tile!
          <button 
            type="button"
            class="btn-close"
            @click="close"
          >
          x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          I'm the default body!
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button
            type="button"
            class="btn-green"
            @click="close"
          >
            Close me!
          </button>
        </slot>
      </footer>
    </div>    
  </div>
</template>

<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-xc {
    background: #fff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }
  .modal-header {
    border-bottom: 1px solid #eee;
    color: #4aae98;
    justify-content: space-between;
    align-items: center;
  }
  .modal-footer {
    border-top: 1px solid #eee;
    justify-content: flex-end;
  }
  .modal-body {
    position: relative;
    padding: 20px 10px;
  }
  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae98;
    background: transparent;
  }
  .btn-green {
    color: #fff;
    background: #4aae98;
    border: 1px solid #4a4a4a;
    border-radius: 2px;
  }
</style>
