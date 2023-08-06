setTimeout(() => {
    netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.open('login');
    setInterval(() => {
        if (netlifyIdentity.currentUser() = null) {} else {
            location.href = '/accounts'
        }
    }, 1000);
}, 1000);