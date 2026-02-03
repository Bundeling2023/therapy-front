/**
 * Example: How to refactor components to use the new GraphQL utilities
 * 
 * Before: Lots of data everywhere
 * After: Cleaner, flatter data structure
 */

// OLD WAY - Before refactoring
// ============================
export default function OldTeam(props: TeamPage) {
  // Accessing nested data everywhere
  const contactInfo = props.generalinfo.data.contactsInfo;
  const socialLinks = props.generalinfo.data.socialLinks;
  const privacyUrl = props.generalinfo.data.privacyPolicyPage.data.url;
  
  return (
    <NavSection 
      info={contactInfo}
      socialLinks={socialLinks}
    />
  );
}

// NEW WAY - After refactoring
// ============================
import { normalizeCollectionItem, getImageUrl, getRelationUrl } from '@/graphql/queryHelpers';

export default function NewTeam(props: TeamPage) {
  // Flatten general info once
  const generalInfo = props.generalinfo;
  
  // No more data - access directly!
  const contactInfo = generalInfo.contactsInfo;
  const socialLinks = generalInfo.socialLinks;
  const privacyUrl = generalInfo.privacyPolicyPage.url;
  
  return (
    <NavSection 
      info={contactInfo}
      socialLinks={socialLinks}
    />
  );
}

// ============================
// Refactoring Teams list component
// ============================

// OLD WAY
function OldTeamList(props: { teams: { data: Array<any> } }) {
  return (
    <div>
      {props.teams.data.map((item) => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <img 
            src={item.img.data.url} 
            alt={item.name}
          />
        </div>
      ))}
    </div>
  );
}

// NEW WAY
function NewTeamList(props: { teams: { data: Array<any> } }) {
  return (
    <div>
      {props.teams.data.map((item) => {
        const member = normalizeCollectionItem(item);
        const imageUrl = getImageUrl(member.img);
        
        return (
          <div key={member.name}>
            <h2>{member.name}</h2>
            <img src={imageUrl} alt={member.name} />
          </div>
        );
      })}
    </div>
  );
}

// ============================
// Implementation path
// ============================
// 1. Start with high-traffic components (Header, Footer, TeamsBlock)
// 2. Run through the normalizeCollectionItem() helper
// 3. Use getImageUrl() for all image fields
// 4. Test in development before pushing to production
// 5. Update TypeScript types alongside refactoring
