<template>
    <div id="login-container">
        <div class="column">
            <div class="card">
                <div class="card-content">
                    <table-renderer
                        :allow-pagination="true"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    username: null,
                    password: null
                },

            };
        },
        computed: {
            ...mapState('auth', ['loading']),
            ...mapState('messages', ['fields']),
        },
        methods: {
            ...mapActions('auth', ['doLogin']),
            doSubmit() {
                this.doLogin({
                    username: this.user.username,
                    password: this.user.password
                })
            }
        },
    };
</script>

<style lang="scss">
    #login-container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        & > .column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 425px;
            width: 425px;
            .card {
                width: 100%;
            }
            .card-content {
                padding: 1em;
            }
            & > .field {
                width: 100%;
            }
        }
    }
</style>
