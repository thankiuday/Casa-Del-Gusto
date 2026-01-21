# PowerShell Script to Batch Update Remaining Image Paths
# Run this script to complete all remaining image path updates

Write-Host "Updating remaining image paths..." -ForegroundColor Green

# Gallery Data - Update all Unsplash URLs to local paths
$galleryFile = "src\data\galleryData.js"
(Get-Content $galleryFile) | 
    ForEach-Object {
        $_ -replace "https://images\.unsplash\.com/photo-1517248135467-4c7edcad34c4\?w=800", "/images/gallery/dining-room.jpg" `
           -replace "https://images\.unsplash\.com/photo-1555939594-58d7cb561ad1\?w=800", "/images/gallery/food-spread.jpg" `
           -replace "https://images\.unsplash\.com/photo-1550966871-3ed3cdb5ed0c\?w=800", "/images/gallery/burger-fries.jpg" `
           -replace "https://images\.unsplash\.com/photo-1552566626-52f8b828add9\?w=800", "/images/gallery/wine-cheese.jpg" `
           -replace "https://images\.unsplash\.com/photo-1414235077428-338989a2e8c0\?w=800", "/images/gallery/restaurant-ambiance.jpg" `
           -replace "https://images\.unsplash\.com/photo-1559339352-11d035aa65de\?w=800", "/images/gallery/interior-design.jpg" `
           -replace "https://images\.unsplash\.com/photo-1590846406792-0adc7f938f1d\?w=800", "/images/gallery/pasta-dish.jpg" `
           -replace "https://images\.unsplash\.com/photo-1551218808-94e220e084d2\?w=800", "/images/gallery/sushi.jpg" `
           -replace "https://images\.unsplash\.com/photo-1578474846511-04ba529f0b88\?w=800", "/images/gallery/breakfast-table.jpg" `
           -replace "https://images\.unsplash\.com/photo-1556910103-1c02745aae4d\?w=800", "/images/gallery/steak.jpg" `
           -replace "https://images\.unsplash\.com/photo-1544148103-0773bf10d330\?w=800", "/images/gallery/dessert.jpg" `
           -replace "https://images\.unsplash\.com/photo-1562565652-a0d8f0c59eb4\?w=800", "/images/gallery/cocktails.jpg" `
           -replace "https://images\.unsplash\.com/photo-1511920170033-f8396924c348\?w=800", "/images/gallery/pizza.jpg" `
           -replace "https://images\.unsplash\.com/photo-1559329007-40df8a9345d8\?w=800", "/images/gallery/coffee-art.jpg" `
           -replace "https://images\.unsplash\.com/photo-1466978913421-dad2ebd01d17\?w=800", "/images/gallery/fresh-bread.jpg" `
           -replace "https://images\.unsplash\.com/photo-1560053068-3a55b2f0b879\?w=800", "/images/gallery/seafood.jpg" `
           -replace "https://images\.unsplash\.com/photo-1583394838336-acd977736f90\?w=800", "/images/gallery/chef-cooking.jpg" `
           -replace "https://images\.unsplash\.com/photo-1571997478779-2adcbbe9ab2f\?w=800", "/images/gallery/appetizers.jpg" `
           -replace "https://images\.unsplash\.com/photo-1530554764233-e79e16c91d08\?w=800", "/images/gallery/outdoor-dining.jpg"
    } | Set-Content $galleryFile

# Blog Data Updates
$blogFile = "src\data\blogData.js"
(Get-Content $blogFile) |
    ForEach-Object {
        $_ -replace "https://images\.unsplash\.com/photo-1621996346565-e3dbc646d9a9\?w=1200", "/images/blog/seasonal-menu.jpg" `
           -replace "https://images\.unsplash\.com/photo-1510812431401-41d2bd2722f3\?w=1200", "/images/blog/wine-pairing.jpg" `
           -replace "https://images\.unsplash\.com/photo-1488459716781-31db52582fe9\?w=1200", "/images/blog/farm-to-table.jpg" `
           -replace "https://images\.unsplash\.com/photo-1556910103-1c02745aae4d\?w=1200", "/images/blog/grilling.jpg" `
           -replace "https://images\.unsplash\.com/photo-1609501676725-7186f017a4b7\?w=1200", "/images/blog/desserts.jpg" `
           -replace "https://images\.unsplash\.com/photo-1627308595171-d1b5d67129c4\?w=1200", "/images/blog/brunch.jpg" `
           -replace "https://images\.unsplash\.com/photo-1555244162-803834f70033\?w=1200", "/images/blog/cooking-tips.jpg" `
           -replace "https://images\.unsplash\.com/photo-1511795409834-ef04bbd61622\?w=1200", "/images/blog/special-events.jpg" `
           -replace "https://images\.unsplash\.com/photo-1583394293214-28ded15ee548\?w=400", "/images/team/chef-marco.jpg" `
           -replace "https://images\.unsplash\.com/photo-1580489944761-15a19d654956\?w=400", "/images/team/chef-sophie.jpg" `
           -replace "https://images\.unsplash\.com/photo-1573496359142-b8d87734a5a2\?w=400", "/images/blog/author-food-writer.jpg" `
           -replace "https://images\.unsplash\.com/photo-1559839734-2b71ea197ec2\?w=400", "/images/blog/author-chef-emma.jpg" `
           -replace "https://images\.unsplash\.com/photo-1414235077428-338989a2e8c0\?w=400", "/images/hero/restaurant-table.jpg" `
           -replace "https://images\.unsplash\.com/photo-1487412720507-e7ab37603c6f\?w=400", "/images/testimonials/amanda-garcia.jpg"
    } | Set-Content $blogFile

# Update page components
$pages = @(
    "src\pages\About.jsx",
    "src\pages\Menu.jsx",
    "src\pages\Gallery.jsx",
    "src\pages\Contact.jsx",
    "src\pages\Blog.jsx",
    "src\pages\Reservations.jsx",
    "src\pages\NotFound.jsx",
    "src\pages\Home2.jsx"
)

foreach ($page in $pages) {
    (Get-Content $page) |
        ForEach-Object {
            $_ -replace "https://images\.unsplash\.com/photo-1517248135467-4c7edcad34c4\?w=1920", "/images/hero/restaurant-dining.jpg" `
               -replace "https://images\.unsplash\.com/photo-1414235077428-338989a2e8c0\?w=1920", "/images/hero/restaurant-table.jpg" `
               -replace "https://images\.unsplash\.com/photo-1559339352-11d035aa65de\?w=1200", "/images/hero/restaurant-interior.jpg" `
               -replace "https://images\.unsplash\.com/photo-1559339352-11d035aa65de\?w=800", "/images/hero/restaurant-interior.jpg" `
               -replace "https://images\.unsplash\.com/photo-1555244162-803834f70033\?w=1920", "/images/hero/food-plates.jpg" `
               -replace "https://images\.unsplash\.com/photo-1555244162-803834f70033\?w=600", "/images/hero/food-plates.jpg" `
               -replace "https://images\.unsplash\.com/photo-1455619452474-d2be8b1e70cd\?w=1920", "/images/hero/blog-food.jpg" `
               -replace "https://images\.unsplash\.com/photo-1569336415962-a4bd9f69cd83\?w=800", "/images/general/map-location.jpg"
        } | Set-Content $page
}

# Update component files
$components = @(
    "src\components\sections\ChefStory.jsx",
    "src\components\sections\Hero.jsx",
    "src\components\ui\SEO.jsx"
)

foreach ($comp in $components) {
    (Get-Content $comp) |
        ForEach-Object {
            $_ -replace "https://images\.unsplash\.com/photo-1577219491135-ce391730fb2c\?w=800", "/images/team/chef-james.jpg" `
               -replace "https://images\.unsplash\.com/photo-1517248135467-4c7edcad34c4\?w=1920", "/images/hero/restaurant-dining.jpg" `
               -replace "https://images\.unsplash\.com/photo-1517248135467-4c7edcad34c4\?w=1200", "/images/hero/restaurant-dining.jpg"
        } | Set-Content $comp
}

Write-Host "✅ All image paths updated successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Download images from Unsplash using IMAGE_MAPPING.md"
Write-Host "2. Or run the image download script (if created)"
Write-Host "3. Verify all images are in place"
Write-Host "4. Test the application with 'npm run dev'"
