import * as React from 'react';
import StoaPostBanner from '@/components/app/stoa/post/PostBanner';
import Grid from '@mui/material/Grid';
import StoaPostBreadcrumb from '@/components/app/stoa/post/Breadcrumb';
import MaterialCard from '@/components/MaterialCard';
import Typography from '@mui/material/Typography';

export default function StoaPost() {
    return (
        <Grid container sx={{ paddingBottom: 5 }}>
            <Grid item xs={12} sx={{ marginBottom: 5 }}>
                <StoaPostBreadcrumb />
            </Grid>
            <Grid item container xs={12} spacing={2} sx={{ marginBottom: 5 }}>
                <Grid item xs={9} container>
                    <Grid item xs={12}>
                        <StoaPostBanner />
                        <Typography
                            variant="h5"
                            component="h1"
                            sx={{ fontWeight: 'bold', paddingY: 3 }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. A animi architecto eius, enim ex excepturi
                        </Typography>
                        <Typography variant="body1" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. A alias amet animi blanditiis consequatur
                            corporis, dicta dolor ducimus eligendi, esse illum
                            iure laborum laudantium magnam modi molestias
                            necessitatibus nobis nulla porro possimus quas
                            quibusdam reprehenderit suscipit tempora tempore
                            unde, vitae voluptate. Aspernatur distinctio
                            eligendi, et illum iusto nesciunt quia reprehenderit
                            totam? Autem eius ipsum laudantium necessitatibus
                            quidem quis quisquam repellat. Aliquam ea eaque hic
                            ipsum neque officiis quo, repudiandae sapiente sunt
                            veritatis. Amet commodi, excepturi illum iste
                            nostrum obcaecati omnis repellat rerum. Eaque,
                            provident sunt. Ipsum quasi sapiente tenetur.
                            Adipisci architecto dolorem necessitatibus
                            perferendis repellat. Aut dignissimos laboriosam
                            magni minima pariatur. Accusamus asperiores beatae
                            consectetur consequuntur cupiditate ea eveniet ex
                            expedita hic illo, in incidunt, iste labore libero
                            magnam maxime modi natus nulla quam quas quia
                            quisquam quod reiciendis repellendus sunt suscipit
                            ut voluptatibus. Accusantium, at, praesentium. A
                            adipisci aliquam deleniti eaque et illo rerum,
                            sapiente vitae? Eveniet ex id reiciendis voluptas
                            voluptatem. Animi consequatur culpa debitis dolores
                            minima necessitatibus, neque nihil ratione saepe
                            sapiente sint suscipit voluptate? Architecto
                            consequuntur culpa iusto libero minima nemo quas
                            quasi sapiente sed sequi? Beatae minima, quaerat!
                            Accusantium doloribus exercitationem impedit
                            mollitia officia porro reprehenderit soluta.
                            Deserunt, reprehenderit tempora? A, ad consectetur
                            distinctio esse et id laboriosam mollitia nesciunt
                            non odit omnis possimus quae quas sed tempora
                            tenetur veritatis. Accusamus delectus magnam
                            molestias, neque praesentium quaerat quidem quod
                            reprehenderit, sunt tempora, temporibus ut
                            voluptatem? Ad, amet aspernatur assumenda beatae
                            consectetur deleniti, deserunt dolorem doloremque
                            eaque ex ipsum labore laudantium maiores maxime modi
                            molestiae necessitatibus obcaecati odio officia
                            perferendis possimus quisquam reiciendis rerum sed
                            sequi sit tempore voluptas! Aperiam dolorem dolores
                            dolorum expedita pariatur quam, quidem quis? Ab
                            adipisci at culpa cumque dolorem dolores doloribus
                            eaque eius facere fuga, ipsum, molestias mollitia
                            quaerat quibusdam quod repellendus sapiente
                            similique ullam vitae voluptatibus! Consequatur
                            culpa ducimus exercitationem itaque nemo qui, quos
                            rem veritatis vero voluptatem. Adipisci animi aut
                            consectetur debitis doloremque eius enim
                            exercitationem id illo magnam maiores, maxime
                            mollitia nam obcaecati omnis possimus quae quidem
                            sint sit totam? Ad architecto consequuntur delectus
                            deserunt dolorum ducimus eos facere fugiat illo
                            molestiae nemo nisi nobis non officia quaerat quas
                            quibusdam quod repellendus reprehenderit sequi sint
                            tempore, vitae voluptas! Accusamus est laborum odio
                            sed voluptatibus. Adipisci dignissimos dolorem
                            dolores ea est eveniet iusto, laborum maiores nemo
                            nisi odit pariatur quo quos recusandae voluptas?
                            Alias architecto autem consequuntur corporis debitis
                            dicta doloremque quos, ratione ut voluptates!
                            Aperiam assumenda consequatur cumque cupiditate
                            delectus eaque eius facilis iure, maiores modi
                            nesciunt quam quas quos tenetur voluptate? In nam
                            natus temporibus. Ab animi aperiam architecto
                            aspernatur autem, blanditiis cumque deleniti
                            doloribus dolorum ducimus enim hic itaque minus
                            perspiciatis rem rerum velit voluptatum. Accusantium
                            commodi delectus est, facere magni maiores odio
                            provident quis rem veritatis. Asperiores aut
                            consequatur, eum harum hic inventore ipsam
                            laboriosam porro possimus quo reprehenderit sunt
                            vitae voluptatum. Aspernatur corporis, debitis
                            ducimus eveniet facere laborum nesciunt nihil non
                            officia pariatur quis repellat ut? Deserunt ea eos
                            porro quo voluptates. Animi at autem consequatur
                            dicta fuga illo incidunt molestiae quos, unde
                            veniam.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Typography
                        variant="subtitle2"
                        component="h6"
                        sx={{ paddingBottom: 2 }}
                    >
                        New materials
                    </Typography>
                    {[1, 2, 3, 4, 5].map((n) => (
                        <MaterialCard
                            mode="mini"
                            sx={{ marginBottom: 1 }}
                            key={n}
                        />
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="subtitle2"
                    component="h6"
                    sx={{ paddingY: 2 }}
                >
                    New materials
                </Typography>
                <Grid item xs={12} container spacing={1}>
                    {[1, 2, 3, 4].map((n) => (
                        <Grid item xs={3} key={n}>
                            <MaterialCard height="20rem" mode="medium" />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
