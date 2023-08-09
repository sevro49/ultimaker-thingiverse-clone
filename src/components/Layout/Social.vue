<script>
export default {};
</script>

<template>
    <div class="social-icons__wrapper">
        <div
            class="social-icons d-flex align-items-center justify-content-center flex-column"
        >
            <a href="https://www.facebook.com/" target="blank">
                <button>
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </button>
            </a>
            <a href="https://twitter.com/" target="blank">
                <button>
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </button>
            </a>
            <a href="https://web.whatsapp.com/" target="blank">
                <button>
                    <font-awesome-icon icon="fa-brands fa-whatsapp" />
                </button>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.social-icons__wrapper {
    background: white;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);

    .social-icons {
        button {
            background: white;
            border: none;
            padding: 8px;
            margin: 2px 0;
            border-radius: 50%;
            align-content: center;
            height: 40px;
            width: 40px;

            a {
                color: #333;
            }

            // &:hover {
            //     background: red;
            // }

            &:nth-child(1):hover {
                color: #fff;
                background: rgb(17, 120, 242);
                background: linear-gradient(
                    38deg,
                    rgba(17, 120, 242, 1) 0%,
                    rgba(9, 78, 161, 1) 100%
                );
            }

            &:nth-child(2):hover {
                color: #fff;
                background: rgb(51, 169, 244);
                background: linear-gradient(
                    38deg,
                    rgba(51, 169, 244, 1) 0%,
                    rgba(9, 132, 210, 1) 100%
                );
            }

            &:nth-child(3):hover {
                color: #fff;
                background: rgb(13, 219, 80);
                background: linear-gradient(
                    229deg,
                    rgba(13, 219, 80, 1) 0%,
                    rgba(5, 150, 52, 1) 100%
                );
            }
        }
    }
}
</style>
