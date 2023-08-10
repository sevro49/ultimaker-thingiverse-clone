<script>
export default {};
</script>

<template>
    <div class="collect-thing p-3 d-flex flex-column">
        <div
            class="collect-thing_header d-flex justify-content-between align-items-center"
        >
            <p class="text-white text-start fw-bold mb-0">
                Select a Collection
            </p>

            <a
                href="javascript:void(0);"
                @click="closeCollect"
                class="text-white"
            >
                <font-awesome-icon icon="fa-solid fa-xmark" />
            </a>
        </div>
        <div class="collect-thing_body py-0 mt-3">
            <p class="text-white text-start">or create a new one below:</p>
            <div class="custom-select w-100 text-start">
                <select>
                    <option value="0">Things to Make</option>
                    <option value="1">Create a new Collection</option>
                </select>
            </div>
        </div>
        <div class="collect-thing_footer flex-grow-1 d-flex flex-column-reverse">
            <button class="btn btn-warning ">Save to Collection</button>
        </div>
    </div>
</template>

<style lang="scss">
.collect-thing {
    width: 300px;
    height: 352px;
    background: var(--thing-blue) !important;
    opacity: 0.8;

    * {
        background: inherit !important;
    }

    &_header {
        p,
        a {
            font-size: 20px;
        }
    }

    &_body {
        p {
            font-size: 13px;
        }
    }

    &_footer{
        button{
            background: #fff !important;
            opacity: 1 !important;
        }
    }
}
</style>
