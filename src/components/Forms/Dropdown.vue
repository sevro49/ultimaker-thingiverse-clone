<script>
export default {
    props: ["list"],
};
</script>

<template>
    <div class="dropdown">
        <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="(item, i) in list" :key="i">
                <template v-if="item.path">
                    <a :href="item.path" class="dropdown-item">
                        {{ item.name }}</a
                    >
                </template>

                <template v-else>
                    {{ item.name }}
                </template>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.dropdown-menu {
    border: 1px solid var(--thing-blue) !important;
    border-radius: 0 !important;
    a {
        color: var(--thing-blue) !important;
    }

    .line-seperator {
        border: 1px solid #333;
    }
}
</style>
