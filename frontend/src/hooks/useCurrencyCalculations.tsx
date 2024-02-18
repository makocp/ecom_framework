const useCurrencyCalculations = () => {
    const transformCentsToEuroString = (cents: number) => {
        return (cents / 100).toFixed(2)
    };

    return {transformCentsToEuroString};
};

export default useCurrencyCalculations;