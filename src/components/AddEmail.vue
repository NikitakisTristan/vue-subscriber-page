<template>
    <div class="input-container">
        <input class="email" type="text" v-model="email" name="email" placeholder="Email Address"/>
        <Button @click="onClick()" text="Subscribe" color="#E38F12" text_color="white"/>
    </div>
</template>


<script>
    import Button from "./Button"

    export default {
        name:"AddEmail",
        data() {
            return {
                email: ''
            }
        },
        components: {
            Button,
        },
        methods: {
            onClick() {
                if(!this.email) {
                    alert('Please add an email address')
                    return
                }

                const newUser = {
                    id: Math.random().toString(36).substr(2, 9),
                    email: this.email
                }

                this.$emit('Subscriber', newUser)
                alert('Successfully Subscribed!')
                
                this.email = ""
            }
        }
    }
</script>

<style scoped>
    .input-container{
        display: flex;
        padding: 1% 30% 0% 30%;
    }
    .email{
        display: block;
        flex: 1;
        height: 32px;
        width: 200px;
        align-content: center;
        text-align: center;
        border-radius: 7px 0px 0px 7px;
        padding: 0px 30px 0px 0px;
        background-color: #8BFFFB41;
        color: white;
        border: 1px solid #FFFFFF00;
    }
    ::placeholder {
        color: #FFFFFF73;
    }

    .Button {
        display: block;
        flex: 2;
    }
    
</style>