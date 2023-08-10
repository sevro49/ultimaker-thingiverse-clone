<script>
export default {
    methods: {
        reloadPage() {
            location.reload();
        },
    },
};
</script>

<template>
    <footer class="border-top p-4 mt-5">
        <div
            class="footer-row d-flex align-items-center justify-content-between"
        >
            <a href="#app" class="footer-row_logo" @click="reloadPage">
                <img
                    src="../../assets/ultimaker-thingiverse-logo-footer.png"
                    alt=""
                />
            </a>
            <div class="footer-row_links">
                <a href="https://www.thingiverse.com/about" target="_blank">About Thingiverse ®</a>
                <a href="https://www.thingiverse.com/legal" target="_blank">Legal</a>
                <a href="https://www.makerbot.com/legal/privacy/" target="_blank">Privacy Policy</a>
                <a href="https://www.thingiverse.com/support" target="_blank">Contact Us</a>
                <a href="https://www.thingiverse.com/developers" target="_blank">Developers</a>
                <a href="https://www.thingiverse.com/changelog" target="_blank">Changelogs</a>
            </div>
        </div>
        <div class="footer-copyright mt-3">
            © 2023
            <a href="https://www.makerbot.com/" target="_blank">
                MakerBot Industries, LLC</a
            >
        </div>
    </footer>
</template>

<style lang="scss">
footer {
    position: static;
    .footer-row {
        &_links a {
            padding-left: 10px;
        }
    }

    a,
    .footer-copyright {
        text-decoration: none;
        color: #666;
        font-size: 12px;
    }

    .footer-copyright {
        text-align: end;
    }
}

@media (max-width: 861px) {
    .footer-row {
        flex-direction: column;

        &_links {
            margin-top: 10px;
        }
    }

    .footer-copyright {
        text-align: center !important;
    }
}
</style>
