<script>
export default {};
</script>

<template>
    <a
        href="#app"
        id="backtotop"
        class="text-decoration-none p-1 rounded text-white bg-thing-blue"
    >
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
        Back to Top
    </a>
</template>

<style lang="scss">
#backtotop {
    border: 2px solid white;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    transition: all 0.3s ease;

    &:hover {
        background: var(--thing-dark-blue) !important;
    }
}
</style>
