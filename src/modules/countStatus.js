export function countStatus(data) {
    let paid = 0, refused = 0, waiting = 0, reversed = 0;
    data.forEach(item => {
        const dataStatus = item.Status;
        if (dataStatus === "Paga")
            paid++;
        else if (dataStatus === "Recusada pela operadora de cartão")
            refused++;
        else if (dataStatus === "Aguardando Pagamento")
            waiting++;
        else if (dataStatus === "Estornada")
            reversed++;
    });
    return {
        paid: paid,
        refused: refused,
        waiting: waiting,
        reversed: reversed,
    };
}
