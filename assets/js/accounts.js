setTimeout(() => {
    netlifyIdentity.on('init', user => console.log('init', user));
    if (netlifyIdentity.currentUser() == null) {
        location.href = 'login'
    }
    document.getElementById("welcome-line").innerHTML = `Welcome ${netlifyIdentity.currentUser().user_metadata.full_name}`
}, 1000);