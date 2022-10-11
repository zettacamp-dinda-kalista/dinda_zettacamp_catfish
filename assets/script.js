getPrice = function() {
    const inputJenis = document.getElementById("jenis").value;
    const jenisValue = inputJenis
    document.getElementById("jenis1").value = jenisValue;

    const inputType = document.getElementById("type").value;
    const typeValue = inputType
    document.getElementById("type1").value = typeValue;

    const numVal1 = Number(document.getElementById("price").value);
    const numVal2 = Number(document.getElementById("discount").value) / 100;
    const totalValue = numVal1 - (numVal1 * numVal2)
    document.getElementById("total_discount").value = totalValue;

    const numVal3 = Number(document.getElementById("price").value);
    const numVal4 = Number(document.getElementById("pajak").value) / 100;
    const pajakValue = numVal3 + (numVal3 * numVal4)
    document.getElementById("total_pajak").value = pajakValue;
}
