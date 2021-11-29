import react from "react"; 
import app from "./app";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/github-provider";

const Providers = () => {
    return(
        <main>
            <GithubProvider>
                <ResetCSS   />
                <app />
            </GithubProvider>
        </main>
    )
}