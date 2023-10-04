const response =
  "content://com.android.providers.downloads.documents/document/raw%3A%2Fstorage%2Femulated%2F0%2FDownload%2FCertificate%20of%20Taxpayer%20Residency.pdf";

const findName = (arg) => {
  if (response.search("/document/")) {
    console.log(response.search("document/"));
    const index = response.search("/document/");
    const res = response.slice(index, arg.length).replace("/document/", "");
    console.log(res);
  }
};

findName(response);
