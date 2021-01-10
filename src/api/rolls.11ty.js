class RollsAPI {
    data() {
        return {
            permalink: '/api/rolls.json'
        };
    }

    compileRoll(roll) {
        const {
            data: {
                title,
                featured_image,
                album
            },
            date,
            url,
        } = roll;
        return {
            title,
            featured_image_id: `${album}/${featured_image}`,
            featured_image,
            album,
            date,
            url: `${this.site.url}${url}`
        };
    }

    render(data) {
        const {roll: rolls} = data.collections;
        const response = {
            rolls: rolls.map(this.compileRoll, data),
            cl: {
                url: `https://res.cloudinary.com/djd6kxozp/image/upload/`,
                id: `djd6kxozp`,
            }
        };
        return JSON.stringify(response);
    }
}

module.exports = RollsAPI;
