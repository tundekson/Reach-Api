'reach 0.1';

export const main = Reach.App(() => {
    const A = Participant('Alice', {
        // Implement the interact interface
        ready: Fun([], Null),
    });
    const B = API('Bob', {
        // Implement the interact interface
    });
    init();
    A.only(()=>{
        interact.ready();
    });
    A.publish();
    commit();
    exit();
});
