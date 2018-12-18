<template>
    <div class="main-form">
        <form action="" ref="form">
            <div class="form-application" v-if="!applicationForm">
                <div class="row">
                    <div class="col col--6 col-md--2 col-s--4">
                        <div class="form-application__data">
                            <field label="Name" class="input-form" id="name" v-model="data.name"
                                   validate="required|alpha_spaces"></field>
                            <field label="Phone" class="input-form" id="phone" v-model="data.phone"
                                   validate="required|phone"
                                   mask="+7 (###) ###-##-##"></field>
                            <field label="E-mail" class="input-form" id="email" v-model="data.email"
                                   validate="required|email"></field>
                        </div>
                    </div>
                    <div class="col col--6 col-md--2 col-s--4">
                        <div class="form-application__comment">
                            <v-textarea label="Your comment" id="comment" v-model="data.comment"></v-textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-button" v-if="!applicationForm">
                <v-button text="Submit" type="btn" @click.native="checkValidation"></v-button>
            </div>
            <transition name="fade" mode="in-out">
                <div class="application-form" v-if="applicationForm">
                <div class="wrapper">
                    <h1>{{responseMessage.title}}</h1>
                    <v-button text="Main page" link="/" @click.native="mainPage"></v-button>
                </div>
            </div>
            </transition>
        </form>
    </div>
</template>

<script>
    export default {
        $_veeValidate: {
            validator: 'new'
        },
        data () {
            return {
                inputValue: '',
                data: {
                    name: '',
                    phone: '',
                    email: '',
                    comment: '',
                },
                responseMessage: {
                    title: ''
                },
                applicationForm: false,
                startSending: false,
            }
        },
        methods: {
            checkValidation () {
                if (this.firstClick) {
                    this.$validator.resume()
                }

                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.clearForm()
                    }
                }).catch((e) => {
                    console.log('validation error', e)
                })
            },
            clearForm () {
                this.$refs.form.reset()

                this.data.name = ''
                this.data.phone = ''
                this.data.email = ''
                this.data.comment = ''

                this.$root.$emit('clearFile')
                this.$root.$emit('clearField')
                this.$root.$emit('clearTextarea')
                this.applicationForm = true
                this.responseMessage.title = 'Application sent'
            },
            mainPage () {
                this.applicationForm = false
            }
        }
    }
</script>

