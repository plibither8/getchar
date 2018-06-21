const getchar = async () => {

    process.stdin.setRawMode(true);
    process.stdin.setEncoding('utf8');

    return new Promise(resolve => process.stdin.once('data', data => {

        const byteArray = [...data];
        if (byteArray.length > 0 && byteArray[0] === 3) {
            console.log('^C');
            process.exit(0);
        }
        process.stdin.setRawMode(false);
        resolve(data);

    }));

};

exports.getchar = getchar;