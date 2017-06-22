const { PLAYCOUNT_RANGE_VALUES, WEIGHTS } = require('./values');

function simString(a, b) {
    return a.toLowerCase() === b.toLowerCase() ? 1 : 0;
}

function simNumber(a, b, { min, max }) {
    return 1 - Math.abs(b - a) / (max - min);
}

function getMinMax(valuesTable) {
    const values = Object.values(valuesTable);
    return {
        min: Math.min(...values),
        max: Math.max(...values)
    };
}

function getPlayCountRange(playCount) {
    if (playCount >= 0 && playCount <= 10000) {
        return 'low';
    } else if (playCount >= 10000 && playCount <= 1000000) {
        return 'medium';
    } else if (playCount >= 1000000 && playCount <= 50000000) {
        return 'high';
    } else if (playCount >= 50000000) {
        return 'ultra';
    }
}

function simGlobal(newCase, storedCase) {

    const nameSim = simString(newCase.name, storedCase.name);
    const artistSim = simString(newCase.artist, storedCase.artist);

    const playCountRangeSim = simNumber(
        PLAYCOUNT_RANGE_VALUES[getPlayCountRange(newCase.price)],
        PLAYCOUNT_RANGE_VALUES[getPlayCountRange(storedCase.price)],
        getMinMax(PLAYCOUNT_RANGE_VALUES)
    );

    const totalWeight = Object.values(WEIGHTS).reduce((a, b) => a + b);

    const globalSim = ((WEIGHTS.name * nameSim)
        + (WEIGHTS.artist * artistSim)
        + (WEIGHTS.playCountRange * playCountRangeSim)
    ) / totalWeight;

    return Object.assign(storedCase, { simValue: globalSim });

}

function testCase(database, newCase) {
    return database.map(storedCase =>
        simGlobal(newCase, storedCase)
    );
}

module.exports = {
    testCase
};