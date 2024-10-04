import axios from "axios";

import { TMDB_API_BASE_URL, TMDB_API_KEY } from "../../utils/constants.js";
import { ComposeUrl } from "../../utils/helpers.js";


class TMDB {
    static getPopularMovies = async (page = 1) => {
        try {
            const response = await axios.get(ComposeUrl(TMDB_API_BASE_URL, "/movie/popular", TMDB_API_KEY, page), {
                "headers": {
                    "Accept": "application/json"
                }
            });
            return response.data.results;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }
}

export default TMDB;