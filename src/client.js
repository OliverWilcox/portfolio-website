import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "3h898zb5", // find this at manage.sanity.io or in your sanity.json
	dataset: "production", // this is from those question during 'sanity init'
	useCdn: true,
	apiVersion: "2021-10-21"
});