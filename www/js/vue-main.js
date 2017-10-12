
var change_password = new Vue({
            el: "#change_password",
            data: {
                profile_password: false,
                profile_password_a: true
            },
            methods: {
                prof_pass: function() {
                    this.profile_password = true,
                    this.profile_password_a = false
                }
            }
        })

var dropdown = new Vue({
            el: ".profile-balance-expenses",
            data: {
               profile_expenses: false,
               profile_history: false
            }
        })

