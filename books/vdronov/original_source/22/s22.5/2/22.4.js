self.addEventListener('message', evt => {
    for (let i = evt.data.min; i <= evt.data.max; ++i) {
        if (i % 2 != 0) {
            let flag = true;
            for (let j = 3; j <= Math.floor(Math.sqrt(i)); j += 2)
                if (i % j == 0) {
                    flag = false;
                    break;
                }
            if (flag)
                self.postMessage(i);
        }
    }
    self.postMessage('stop');
});
