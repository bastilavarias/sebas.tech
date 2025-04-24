import Link from "next/link";
import {ExternalLink} from "lucide-react";

export default function Post() {
    return (
        <section>
            <div className="mb-12">
                <h1 className="text-lg font-medium text-black dark:text-white">How to Build a Scalable API with Node.js
                    and Express</h1>
                <small className="text-muted-foreground text-xs">Posted 3 days ago</small>
            </div>

            <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate delectus dignissimos doloribus eos excepturi exercitationem fugiat id magnam mollitia officia, optio quaerat quia quibusdam recusandae saepe sint totam ullam voluptate, voluptatibus! Architecto culpa dicta dolor, dolorem eaque eum ex, excepturi fugiat incidunt itaque labore libero nisi perferendis voluptate voluptates?
            </p>
        </section>
    )
}