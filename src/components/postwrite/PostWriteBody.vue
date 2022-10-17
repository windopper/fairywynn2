<template>
<div class='body-container'>
    <div class='body-title-container'>
        <input />
    </div>
    <div class='body-content-container'>
        <textarea />
    </div>
    </div>
</template>

<script>
export default {
name: 'PostWriteBody',
}
</script>

<style scoped>
    .body-container {
        width: calc(100% - 2rem);
        height: fit-content;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .body-title-container {
        width: 100%;
    }
    .body-title-container input {
        height: 50px;
        width: 100%;
        border: none;
        outline: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 0 1rem;        
    }
    .body-title-container > input:focus {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
    .body-content-container {
        width: 100%;
    }
    .body-content-container > textarea {
        outline: none;
        border: none;
        width: 100%;
        margin-top: 1rem;
        padding: 0.5rem;
    }
</style>