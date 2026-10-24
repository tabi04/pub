const { createApp } = Vue;

createApp({

    data() {
        return {
            concert: {
                title: "第30回定期演奏会",
                date: "2027年5月16日",
                place: "香取市佐原文化会館",
                fee: "無料",
                description:
                    "混声合唱組曲や日本の名曲を中心に演奏します。"
            }
        };
    }

}).mount("#app");
