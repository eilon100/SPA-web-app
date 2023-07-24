import React from 'react';
import ParagraphHeader from '../ParagraphHeader';

function Menu() {
  return (
    <div className="mx-auto max-w-2xl py-20 text-center" dir="auto">
      <div className="text-3xl">
        <ParagraphHeader>תפריט</ParagraphHeader>
      </div>
      <div className="mt-4 flex flex-col gap-5">
        <p>
          לאחר שנים של עבודה עם המסעדות והמקומות הטובים והמצליחים בישראל אנחנו
          יודעים איך להשתמש בדיגיטל כדי למשוך לקוחות חדשים, לגרום להם להזמין
          מקום במסעדה או להזמין משלוח הביתה.
        </p>
        <p>
          התהליך שנעבור יחד יעניק לכם את כל המעטפת שאתם צריכים: אפיון מדויק,
          עיצוב מהמם וטכנולוגיה הכי חדשנית שמתחברת לכל הכלים שיש לכם במסעדה.
          כשהאתר שלכם יהיה באוויר גם ניתן לכם מערכת שבעזרתה תוכלו לפרסם ולמשוך
          לקוחות חדשים באופן קל ואוטומטי.
        </p>
      </div>
    </div>
  );
}

export default Menu;
