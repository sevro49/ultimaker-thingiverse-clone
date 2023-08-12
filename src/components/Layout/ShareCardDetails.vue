<script>
export default {};
</script>

<template>
    <div class="socialShare-icons__wrapper position-relative">
        <p class="text-start p-2 fw-bold mb-0">Share this thing!</p>
        <div class="socialShare-icons">
            <a href="https://www.facebook.com/" target="blank">
                <button class="facebook">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </button>
            </a>
            <a href="https://twitter.com/" target="blank">
                <button class="twitter">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </button>
            </a>
            <a href="https://web.whatsapp.com/" target="blank">
                <button class="whatsapp">
                    <font-awesome-icon icon="fa-brands fa-whatsapp" />
                </button>
            </a>
            <a href="mailto:dr.emreguler@hotmail.com.tr" target="blank">
                <button class="mail">
                    <font-awesome-icon icon="fa-regular fa-envelope" />
                </button>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.socialShare-icons__wrapper {
    width: 220px;
    height: 100px;
    z-index: 20;
    background: white;
    border: none;
    top: 63px;
    right: -108px;
    transform: translate(-50%, -50%);

    .socialShare-icons {
        a {
            font-size: 20px;

            button {
                background: rgb(231, 231, 231);
                border: none;
                padding: 8px;
                margin: 2px 0;
                border-radius: 50%;
                align-content: center;
                height: 45px;
                width: 45px;
                margin: 0 3px;

                &.facebook:hover {
                    color: #fff;
                    background: rgb(17, 120, 242);
                    background: linear-gradient(
                        38deg,
                        rgba(17, 120, 242, 1) 0%,
                        rgba(9, 78, 161, 1) 100%
                    );
                }

                &.twitter:hover {
                    color: #fff;
                    background: rgb(51, 169, 244);
                    background: linear-gradient(
                        38deg,
                        rgba(51, 169, 244, 1) 0%,
                        rgba(9, 132, 210, 1) 100%
                    );
                }

                &.whatsapp:hover {
                    color: #fff;
                    background: rgb(13, 219, 80);
                    background: linear-gradient(
                        229deg,
                        rgba(13, 219, 80, 1) 0%,
                        rgba(5, 150, 52, 1) 100%
                    );
                }

                &.mail:hover {
                    color: var(--thing-blue);
                    border: 1px solid var(--thing-blue);
                }
            }
        }
    }
}
</style>
