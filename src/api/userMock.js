export default {
    login(user) {
        return {
            token: '1234',
            user: {
                email: user.email,
                role: 'Admin',
                company: 'GPN'
            }
        }
    },
    logout() {
        console.log('logged out')
    }
}