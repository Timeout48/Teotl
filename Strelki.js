let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
    ask(
        "Вы согласны?",
        yes = () => { alert("Вы согласились."); }
        no = () => { alert("Вы отменили выполнение."); }
      );