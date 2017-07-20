import bulldata from '../../res/data/bulldata.json';

export default class BullDataRepository {
    fetch() {
        return new Promise((resolve, reject) => {
            if (bulldata !== null && bulldata.length !== 0) {
                console.log(bulldata.length);
                resolve(bulldata);
            } else {
                reject(bulldata);
            }
        })
    }
}