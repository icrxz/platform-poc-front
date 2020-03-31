<template>
  <v-container>
    <v-flex md-12>
      <p class="title">Ofertas</p>
    </v-flex>
    <v-layout row wrap>
      <OfferList
        v-for="(offer, index) in offers"
        :key="index"
        :id="parseInt(offer.id)"
        :name="offer.attributes.organization_name"
        :thumbnail="offer.attributes.organization_thumbnail_url"
        :value="parseFloat(offer.attributes.fundraise_target)"
      />
    </v-layout>
  </v-container>
</template>

<script>
import OfferList from "./_offers_list.vue";

const offers = [
  {
    id: 1,
    attributes: {
      organization_name: "Kling, Weissnat and Cole",
      segment: "Kids & Clothing",
      offer_type: "Diamond IV",
      pitch_deck:
        "Tempora unde voluptatem. Fugiat aut veniam. Culpa qui quis. Itaque atque quae. Dolores necessitatibus autem. Aperiam enim aut. Quia et rem. Eligendi error dolorem. Aspernatur sed non. Id minus enim. Vel eaque qui. Velit reiciendis explicabo. Voluptatum voluptatem laborum. Laudantium sunt facere. Deleniti sint voluptatibus. Non ratione itaque. Explicabo sit maxime. Enim dignissimos ratione. Voluptate minima nostrum. Ex eos sunt. Ipsa corrupti temporibus. Consequatur eos beatae. Optio magni quaerat. Sequi asperiores consequuntur. Cumque quia rem. Quo maiores vel. Aut optio facilis. Et inventore et. Officia sed enim. Cumque quaerat fuga. Accusamus nemo iusto. Et porro sapiente. Commodi ut expedita. Deleniti eveniet quis. Iusto commodi facere. Voluptatem voluptates veritatis. Molestiae voluptas provident. Fugiat omnis laboriosam. Est aut provident. Suscipit explicabo odio. Rerum consequuntur praesentium. Consequuntur perspiciatis eum. Autem repudiandae explicabo. Suscipit voluptatem et. Eaque saepe maiores. Rerum voluptate et. Omnis velit recusandae. Iste asperiores voluptatem. Accusantium sint a. Qui sint nesciunt. Doloribus ullam aut. Nam qui nostrum. Ratione quis dignissimos. Aspernatur dignissimos sed. Qui non magni. A eos hic. Ea aut adipisci. Laudantium qui velit. Laboriosam et necessitatibus. Debitis tempora quo. ",
      fundraise_target: "80235.09",
      organization_logo_url:
        "https://platform-poc.s3.sa-east-1.amazonaws.com/logos/basement_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATPYHOW54HKXVT2R3%2F20200327%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200327T134315Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=00d6881252a636ae7f9f4a11783566fed8221c883473721e16501e9bfea76bfd",
      organization_thumbnail_url:
        "https://platform-poc.s3.sa-east-1.amazonaws.com/thumbnails/basement_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATPYHOW54HKXVT2R3%2F20200327%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200327T134315Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=76ff11869250330d66b5620a3ca44d70c0d6f076add348877e0b8101235361d7"
    }
  },
  {
    id: 2,
    attributes: {
      organization_name: "Mraz, Flatley and Klein",
      segment: "Jewelry",
      offer_type: "Bronze V",
      pitch_deck:
        "Et et aut. Et error magnam. Quod labore velit. Rerum nesciunt nulla. Eum expedita sit. Sunt magnam nesciunt. Cum est deserunt. Quas odit laudantium. Porro unde provident. Occaecati magnam velit. Mollitia minima vero. Et ipsam inventore. Sit sunt in. Debitis et magnam. Velit praesentium id. Autem molestiae neque. Culpa voluptatem quo. Enim molestiae neque. Officia aut qui. Eius ea mollitia. Nobis porro debitis. Iste porro molestiae. Rerum ab numquam. Autem tempore voluptates. Quasi nesciunt omnis. Quas natus alias. Corrupti eos ratione. Magnam natus asperiores. Sit ut voluptatum. Est omnis et. Omnis dicta officia. Commodi aut quibusdam. Maxime voluptatem vero. Delectus quidem voluptate. Voluptatum pariatur cupiditate. Quibusdam quo quis. Beatae et assumenda. Amet mollitia et. Libero eaque est. Praesentium voluptatibus molestiae. Et rem et. Officia qui sint. Veritatis quis deleniti. Vel totam accusamus. Amet voluptatibus molestiae. Illum est et. Porro corporis aut. Expedita omnis quaerat. Sed distinctio minus. Incidunt velit ut. Quidem quia omnis. Laboriosam rerum similique. Consequuntur quisquam mollitia. Et at inventore. Ipsam itaque magnam. Rem eligendi amet. Blanditiis officia ducimus. Velit ipsa enim. Exercitationem optio molestiae. Veritatis eaque accusantium. ",
      fundraise_target: "52741.07",
      organization_logo_url:
        "https://platform-poc.s3.sa-east-1.amazonaws.com/logos/basement_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATPYHOW54HKXVT2R3%2F20200327%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200327T134340Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=a68d20a1f41b71de2bd52fcebc6064841f0ef71e71e111b2b0b17d63a10aced4",
      organization_thumbnail_url:
        "https://platform-poc.s3.sa-east-1.amazonaws.com/thumbnails/basement_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATPYHOW54HKXVT2R3%2F20200327%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200327T134340Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=ccb5aa092fb0fc089eae98643a6d05fee58205aff93d7eaf541d160d61a778a2"
    }
  },
  {
    id: 3,
    attributes: {
      organization_name: "Heaney-Harris",
      segment: "Books",
      offer_type: "Silver IV",
      pitch_deck:
        "Ab voluptas nesciunt. Quis qui atque. Placeat dolore veniam. Quis nulla enim. Eos voluptas dolorem. Nihil eligendi ullam. Est architecto fugiat. Beatae enim non. Minus rerum atque. Nisi laboriosam aut. Exercitationem iure distinctio. Est beatae perferendis. Voluptatem dolor molestiae. Asperiores temporibus dolorum. Nulla omnis fuga. Sapiente odio hic. Suscipit error dolorum. Consectetur et corrupti. Ipsam labore qui. Voluptatem velit modi. Repellat iusto est. Occaecati consequatur est. Dicta eum autem. Illo aspernatur ipsum. Est quas cumque. Officiis repellendus nemo. In esse sit. Debitis omnis modi. Tempore et quam. Quis officia aut. Aut iusto sed. In qui reprehenderit. Ut harum suscipit. Laborum facere quo. Animi quo consequuntur. Sunt illum ratione. Sint temporibus qui. Qui reiciendis officiis. Ad cum ut. Eveniet odio facilis. Voluptatum fugiat repudiandae. Corrupti recusandae eum. Nobis dolor cumque. Dicta quia vel. Ullam similique harum. Et consequatur doloribus. Deleniti praesentium mollitia. Asperiores quae consequatur. Veritatis occaecati praesentium. Soluta et laboriosam. Eum magnam animi. Voluptatem id ullam. Assumenda accusamus laborum. Est consequatur autem. Ipsa commodi totam. Quisquam ratione tempore. Et officia et. Dignissimos sit labore. Quidem incidunt aut. Laboriosam expedita cum. ",
      fundraise_target: "48905.05",
      organization_logo_url:
        "https://platform-poc.s3.sa-east-1.amazonaws.com/logos/basement_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATPYHOW54HKXVT2R3%2F20200327%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200327T134400Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=cfed398de6cb619c30279921ffb49a072419e5917482ba38b63f1b0dcf50135a",
      organization_thumbnail_url:
        "https://platform-poc.s3.sa-east-1.amazonaws.com/thumbnails/basement_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATPYHOW54HKXVT2R3%2F20200327%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200327T134400Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=06245d6f2ffe1e9d7b891756f8cc6435cffc2743ac9edd31a325dbc421f1e9be"
    }
  },
  {
    id: 4,
    attributes: {
      organization_name: "Thiel and Sons",
      segment: "Books & Automotive",
      offer_type: "Bronze IV",
      pitch_deck:
        "Et soluta est. Voluptas assumenda rem. Et voluptatem quas. Et rerum voluptatibus. Deleniti quasi et. Et soluta cumque. Et ut eum. Ut qui quaerat. Sit accusantium at. Et quia impedit. Et dicta officiis. Voluptates tempore ullam. Quia eaque at. Explicabo dolorem iure. Soluta nobis cum. Voluptate magnam mollitia. Iste quasi aperiam. Adipisci ullam necessitatibus. Facilis consequatur magni. Molestiae laborum eaque. Nihil iste doloribus. Fugiat qui repellat. Reprehenderit officiis molestias. At ipsam sunt. Repellendus qui nihil. Alias veritatis fugiat. Sunt laudantium sint. Possimus ullam in. Est sit labore. Voluptas dolore dignissimos. Illo dolores nihil. Adipisci sunt et. Qui cum illum. Quas qui et. Repudiandae velit culpa. Ut a est. Soluta consectetur officia. Hic aliquid recusandae. Dolores rem voluptatem. Dolores consequatur aut. Eligendi et unde. Qui accusantium cumque. Natus possimus nesciunt. Ipsam quis est. Consectetur voluptas suscipit. Pariatur rerum provident. Dicta accusamus nihil. Impedit porro est. Inventore amet modi. Labore occaecati ut. Est quam rerum. Qui repellendus error. Mollitia excepturi fugit. Nihil aut fugiat. Recusandae labore in. Dolor vel ut. Explicabo fugiat eum. Iste natus voluptate. Ut ex est. Incidunt dolor nulla. ",
      fundraise_target: "15632.04",
      organization_logo_url:
        "https://platform-poc.s3.sa-east-1.amazonaws.com/logos/basement_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATPYHOW54HKXVT2R3%2F20200327%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200327T134420Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=3f2c2e0a68ad0bf1f259ed59d2643ab2eab380b6210f91644005d37240dbc962",
      organization_thumbnail_url:
        "https://platform-poc.s3.sa-east-1.amazonaws.com/thumbnails/basement_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATPYHOW54HKXVT2R3%2F20200327%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200327T134420Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=fdefcc67c2967210cb9feaa8de4095774d335af0c0e8396e8f56c9f14623d1dd"
    }
  }
];

export default {
  data() {
    return {
      offers: offers
    };
  },
  components: {
    OfferList
  }
};
</script>

<style scoped>
</style>