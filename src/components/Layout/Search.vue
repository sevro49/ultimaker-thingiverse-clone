<script>
export default {};
</script>

<template>
    <div class="navbar-search input-group flex-grow-1">
        <span
            class="input-group-text bg-thing-dark-blue text-light border-0 rounded-start-1"
        >
            <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                flip="horizontal"
            />
        </span>
        <input
            type="text"
            class="form-control bg-thing-dark-blue border-0 text-light rounded-end-1"
            placeholder="Search Thiniverse"
        />
    </div>
</template>

<style lang="scss">
.navbar-search {
        &.input-group {
            width: 35% !important;

            input[type="text"] {
                border: none !important;
                outline: none !important;

                :focus {
                    outline: none !important;
                }
            }
        }
    }
</style>
