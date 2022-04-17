
import * as Font from "expo-font";

export default useFonts = async () => {
    await Font.loadAsync({
        'Lobster-Regular': require('./Lobster-Regular.ttf'),
        'MsMadi-Regular': require('./MsMadi-Regular.ttf')
    });
};